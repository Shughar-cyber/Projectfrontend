export default function KenBurnsBackground({ image, overlayOpacity = 0.45 }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
      <div
        className="animate-kenburns absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          background: `linear-gradient(180deg, rgba(5,7,13,${overlayOpacity + 0.15}) 0%, rgba(5,7,13,${overlayOpacity - 0.15}) 35%, rgba(5,7,13,${overlayOpacity - 0.15}) 65%, rgba(5,7,13,${overlayOpacity + 0.15}) 100%)`,
        }}
      />
    </div>
  );
}
