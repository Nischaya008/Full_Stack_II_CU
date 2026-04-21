import { LANGUAGE_IDS } from './constants.js';

export const executeCode = async (language, version, sourceCode, stdin = '') => {
    try {
        const languageId = LANGUAGE_IDS[language];
        if (!languageId) {
            throw new Error(`Unsupported language: ${language}`);
        }

        // Submit the code for execution with wait=true for synchronous result
        const response = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                source_code: sourceCode,
                language_id: languageId,
                stdin: stdin,
                cpu_time_limit: 5,
                wall_time_limit: 10
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || errorData.error || 'Execution failed');
        }

        const data = await response.json();

        // Judge0 status IDs:
        // 1-2 = In Queue/Processing, 3 = Accepted, 4 = Wrong Answer,
        // 5 = Time Limit Exceeded, 6 = Compilation Error, 7-14 = Runtime Errors
        let output = '';
        let hasError = false;

        if (data.compile_output) {
            output += data.compile_output;
            if (data.status && data.status.id === 6) {
                hasError = true;
            }
        }

        if (data.stderr) {
            output += (output ? '\n' : '') + data.stderr;
            hasError = true;
        }

        if (data.stdout) {
            output = data.stdout + (hasError ? '\n' + output : '');
        }

        if (!output && data.status) {
            output = data.status.description || 'No output';
        }

        return {
            run: {
                output: output || 'No output',
                code: hasError ? 1 : 0
            }
        };
    } catch (error) {
        if (error.message) {
            throw error;
        }
        throw new Error('Network error occurred');
    }
};