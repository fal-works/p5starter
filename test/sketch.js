//eslint-disable-next-line
const p5s = p5starter;

let p, canvas;
p5s.init.onStartSetup.push((p5Inst, canvasInst) => {
  p = p5Inst;
  canvas = canvasInst;
});

const { drawOnCanvas } = p5s;

const setup = () => {
  p.background("#f0f0f0");
  drawOnCanvas(() => {
    const { width, height } = canvas.size.logical;
    p.translate(width / 2, height / 2);
    p.circle(0, 0, 150);
  });
};

// p5s.fixedRatio({ width: 200, height: 200 }).start({ setup });
p5s.variableRatio({ height: 200 }).start({ setup });

p5s.autoResizeCanvas(setup);
