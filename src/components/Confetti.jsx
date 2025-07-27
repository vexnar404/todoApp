import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import confetti from 'canvas-confetti'

function Confetti() {
    const todos = useSelector((state) => state.todos.todos);
    const fired = useRef(false);

    useEffect((state) => {
        const allCompleted = todos.length > 0 && todos.every((todo) => todo.completed);
        if (allCompleted && !fired.current) {
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 }
            });
            fired.current = true;
        }

        if (!allCompleted) {
            fired.current = false;
        }
    }, [todos]);

  return null;
}
export default Confetti;