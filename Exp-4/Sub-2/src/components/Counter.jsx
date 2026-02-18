import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset, clearHistory } from '../store/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const history = useSelector((state) => state.counter.history);
  const dispatch = useDispatch();
  const [inputAmount, setInputAmount] = useState(5);

  return (
    <div style={{
      backgroundColor: '#3A2525',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <header style={{
        backgroundColor: '#000080',
        width: '100%',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '3px solid #FF0000',
        marginBottom: '30px'
      }}>
        <h1 style={{
          color: '#ffffff',
          margin: 0,
          fontSize: '2.5rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          🔢 Redux Counter Application
        </h1>
        <p style={{
          color: '#ffffff',
          margin: '10px 0 0 0',
          fontSize: '1.1rem'
        }}>
          I am managing state centrally using Redux Toolkit
        </p>
      </header>

      <main style={{
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {/* Counter Display */}
        <div style={{
          backgroundColor: '#000080',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '3px solid #FF0000'
        }}>
          <h2 style={{
            color: '#ffffff',
            margin: '0 0 20px 0',
            fontSize: '1.5rem'
          }}>
            Current Count
          </h2>
          <div style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#FF0000',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            {count}
          </div>
        </div>

        {/* Control Buttons */}
        <div style={{
          backgroundColor: '#000080',
          padding: '30px',
          borderRadius: '12px',
          border: '2px solid #9E2A3A'
        }}>
          <h3 style={{
            color: '#ffffff',
            margin: '0 0 20px 0',
            textAlign: 'center'
          }}>
            Controls
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '15px',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => dispatch(increment())}
              style={{
                backgroundColor: '#9E2A3A',
                color: '#ffffff',
                border: '2px solid #FF0000',
                padding: '15px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              ➕ Increment
            </button>
            
            <button
              onClick={() => dispatch(decrement())}
              style={{
                backgroundColor: '#9E2A3A',
                color: '#ffffff',
                border: '2px solid #FF0000',
                padding: '15px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              ➖ Decrement
            </button>
            
            <button
              onClick={() => dispatch(reset())}
              style={{
                backgroundColor: '#FF0000',
                color: '#ffffff',
                border: '2px solid #9E2A3A',
                padding: '15px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              🔄 Reset
            </button>
          </div>

          {/* Increment by Amount */}
          <div style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <input
              type="number"
              value={inputAmount}
              onChange={(e) => setInputAmount(Number(e.target.value))}
              style={{
                padding: '10px',
                borderRadius: '6px',
                border: '2px solid #9E2A3A',
                backgroundColor: '#ffffff',
                color: '#000000',
                width: '100px',
                textAlign: 'center'
              }}
            />
            <button
              onClick={() => dispatch(incrementByAmount(inputAmount))}
              style={{
                backgroundColor: '#000080',
                color: '#ffffff',
                border: '2px solid #FF0000',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Add Amount
            </button>
          </div>
        </div>

        {/* History Section */}
        <div style={{
          backgroundColor: '#000080',
          padding: '30px',
          borderRadius: '12px',
          border: '2px solid #9E2A3A'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <h3 style={{
              color: '#ffffff',
              margin: 0
            }}>
              📜 Action History
            </h3>
            <button
              onClick={() => dispatch(clearHistory())}
              style={{
                backgroundColor: '#FF0000',
                color: '#ffffff',
                border: '1px solid #9E2A3A',
                padding: '8px 15px',
                borderRadius: '4px',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              Clear History
            </button>
          </div>
          
          <div style={{
            backgroundColor: '#3A2525',
            padding: '15px',
            borderRadius: '6px',
            maxHeight: '200px',
            overflowY: 'auto'
          }}>
            {history.length === 0 ? (
              <p style={{ color: '#ffffff', textAlign: 'center', margin: 0 }}>
                No actions yet. Start using the counter!
              </p>
            ) : (
              history.map((action, index) => (
                <div
                  key={index}
                  style={{
                    color: '#ffffff',
                    padding: '5px 0',
                    borderBottom: index < history.length - 1 ? '1px solid #9E2A3A' : 'none'
                  }}
                >
                  {index + 1}. {action}
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <footer style={{
        backgroundColor: '#000080',
        width: '100%',
        padding: '20px',
        textAlign: 'center',
        borderTop: '3px solid #FF0000',
        marginTop: '30px'
      }}>
        <p style={{
          color: '#ffffff',
          margin: 0
        }}>
          © 2026 Redux Counter - Built with Redux Toolkit & React
        </p>
      </footer>
    </div>
  );
};

export default Counter;
