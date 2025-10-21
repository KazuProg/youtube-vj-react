import { useElementSize } from "./hooks/useElementSize";
import styles from "./index.module.css";

interface FaderProps {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  onChange: (value: number) => void;
  vertical?: boolean;
  reverse?: boolean;
  style?: React.CSSProperties;
}

const Fader = ({
  min = 0,
  max = 100,
  value = 50,
  step = 1,
  onChange,
  vertical = false,
  reverse = false,
  style,
}: FaderProps) => {
  const [containerRef, containerSize] = useElementSize();

  const rotateDeg = (vertical ? -90 : 0) + (reverse ? 180 : 0);
  return (
    <div ref={containerRef} className={`${styles.faderContainer}`} style={style}>
      <input
        type="range"
        step={step}
        value={value}
        min={min}
        max={max}
        style={{
          margin: 0,
          padding: 0,
          transform: `rotate(${rotateDeg}deg)`,
          width: vertical ? containerSize.height : containerSize.width,
          height: 0,
        }}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default Fader;
