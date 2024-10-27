import { CSSProperties, useEffect, useRef } from "react";
import canvasConfetti, { CreateTypes, GlobalOptions } from "canvas-confetti";

const DEFAULT_GLOBAL_OPTIONS: GlobalOptions = {
  resize: true,
  useWorker: false,
};

const DEFAULT_STYLE: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function getFinalStyle(style?: CSSProperties, className?: string) {
  if (!style && !className) {
    return DEFAULT_STYLE;
  }

  return style;
}
interface ConfettiProps {
  className?: string;
  style?: CSSProperties;
  width?: string | number;
  height?: string | number;
  globalOptions?: GlobalOptions;
  onInit?: (params: { confetti: CreateTypes }) => void;
}

function Confetti({
  style,
  className,
  width,
  height,
  globalOptions,
  onInit,
}: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confetti = useRef<CreateTypes | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    confetti.current = canvasConfetti.create(canvasRef.current, {
      ...DEFAULT_GLOBAL_OPTIONS,
      ...globalOptions,
    });

    onInit?.({ confetti: confetti.current });

    return () => {
      confetti.current?.reset();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={getFinalStyle(style, className)}
      className={className}
      width={width}
      height={height}
    />
  );
}
export default Confetti;
