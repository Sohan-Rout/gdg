export default function ZigZagDivider() {
  return (
    <div className="w-full bg-white overflow-hidden flex justify-center">
      <div
        className="w-full"
        style={{
          height: '4rem',
          backgroundColor: 'white',
          backgroundImage: `repeating-linear-gradient(
            45deg,
            gray,
            gray 2px,
            transparent 2px,
            transparent 12px
          )`,
        }}
      />
    </div>
  );
}