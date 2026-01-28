"use client"

export function TipWidget() {
  return (
    <div className="bg-[#E65F2A] rounded-[32px] p-6 shadow-sm h-full flex flex-col justify-between text-white relative overflow-hidden group hover:shadow-md transition-shadow">
      
      {/* Content */}
      <h3 className="text-2xl font-medium leading-tight relative z-10 max-w-[90%]">
        How to add new tasks during meetings in our team?
      </h3>

      {/* Decorative/Action Button */}
      <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center self-end backdrop-blur-sm transition-transform group-hover:scale-110 cursor-pointer">
        <span className="text-2xl font-bold">!</span>
      </div>

      {/* Subtle Texture/Gradient Circle (Optional to match image grain) */}
      <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
    </div>
  )
}
