import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const canvas = useRef();
  const [positionPlayer, setPositionPlayer] = useState({ x: 0, y: 0 });
  const [positionEnemy, setPositionEnemy] = useState({ x: 400, y: 100 });

  const [velocityPlayer, setVelocityPlayer] = useState({ x: 0, y: 0 });

  // const player = { x: 0, y: 0 };

  const plaerUpdate = (ctx) => {};

  const player = (ctx) => {
    ctx.fillStyle = "red";
    ctx.fillRect(positionPlayer.x, positionPlayer.y, 50, 150);
  };

  const enemy = (ctx) => {
    ctx.fillStyle = "red";
    ctx.fillRect(positionEnemy.x, positionEnemy.y, 50, 150);
  };

  // animate();

  useEffect(() => {
    if (!canvas.current) return;
    const c = canvas.current.getContext("2d");
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);

    player(c);
    enemy(c);
    animate(c);
  }, [
    player,
    enemy,
    positionEnemy,
    positionPlayer,
    setPositionEnemy,
    setPositionPlayer,
  ]);

  function animate(c) {
    window.requestAnimationFrame(animate);
    c.fillRect(0, 0, canvas.width, canvas.height);
    setPositionPlayer({ x: positionPlayer.x, y: positionPlayer.y + 10 });
    setPositionEnemy({ x: positionEnemy.x, y: positionEnemy.y + 10 });
  }
  return (
    <>
      <canvas
        width={1024}
        height={576}
        ref={canvas}
        className="canvas"
        style={{ background: "black" }}
      ></canvas>
    </>
  );
}

export default App;
