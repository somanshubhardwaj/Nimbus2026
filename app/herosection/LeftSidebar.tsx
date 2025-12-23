'use client';

const LeftSidebar = () => {
  return (
    <div className="absolute left-0 top-0 h-full w-[80px] z-30 flex flex-col justify-between items-center py-8 border-r border-white/20 bg-transparent text-white mix-blend-difference">
      {/* Top Menu Icon */}
      <div className="flex flex-col gap-1.5 cursor-pointer">
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {/* Vertical Text */}
      <div className="flex-1 flex items-center justify-center">
        <h2 
          className="whitespace-nowrap text-2xl tracking-[0.2em] font-bold rotate-180"
          style={{ 
            writingMode: 'vertical-rl',
            fontFamily: 'Neoform, sans-serif'
          }}
        >
          NIMBUS 2026
        </h2>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col gap-4 text-xs font-mono tracking-widest opacity-80">
        <div className="cursor-pointer hover:text-[#5227FF] transition-colors">01/</div>
        <div className="cursor-pointer hover:text-[#5227FF] transition-colors flex items-center gap-2" style={{ writingMode: 'vertical-rl' }}>
          <span className="rotate-180">Explore</span> 02/
        </div>
        <div className="cursor-pointer hover:text-[#5227FF] transition-colors">03/</div>
        <div className="cursor-pointer hover:text-[#5227FF] transition-colors">04/</div>
        <div className="cursor-pointer hover:text-[#5227FF] transition-colors">05/</div>
        <div className="cursor-pointer hover:text-[#5227FF] transition-colors">06/</div>
        <div className="cursor-pointer hover:text-[#5227FF] transition-colors">07/</div>
        <div className="cursor-pointer hover:text-[#5227FF] transition-colors">08/</div>
      </div>
    </div>
  );
};

export default LeftSidebar;
