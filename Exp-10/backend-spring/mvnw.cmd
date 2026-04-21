@REM Maven Wrapper for Windows
@echo off
if "%OS%"=="Windows_NT" setlocal

set "DIRNAME=%~dp0"
if "%DIRNAME%"=="" set "DIRNAME=."
set "WRAPPER_JAR=%DIRNAME%.mvn\wrapper\maven-wrapper.jar"

set "JAVA_EXE=java.exe"
if defined JAVA_HOME set "JAVA_EXE=%JAVA_HOME%\bin\java.exe"

"%JAVA_EXE%" %MAVEN_OPTS% -classpath "%WRAPPER_JAR%" "-Dmaven.multiModuleProjectDirectory=%DIRNAME%." org.apache.maven.wrapper.MavenWrapperMain %*
if ERRORLEVEL 1 goto error
goto end

:error
if "%OS%"=="Windows_NT" endlocal
cmd /C exit /B 1

:end
if "%OS%"=="Windows_NT" endlocal
