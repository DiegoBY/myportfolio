function RadarAnimation() {
    return (
        <>
            <div className="hidden w-[294px] h-[294px] relative rounded-full overflow-hidden bg-transparent border-2 border-[#847EA4] lg:flex justify-center items-center">
                <div className="absolute h-0.5 bg-[#703FDF] left-1/2 top-1/2 w-1/2 origin-left z-10 animate-animationRadar">
                    <div className="absolute h-52 w-52 bg-gradient-to-l from-[#B191F8] to-[#703FDF]/20 left-0 bottom-1/2 "></div>
                </div>

                <div className="w-[244px] h-[244px] rounded-full bg-transparent border-2 border-[#847EA4] flex justify-center items-center">
                    <div className="w-[194px] h-[194px] rounded-full bg-transparent border-2 border-[#847EA4] flex justify-center items-center">
                        <div className="w-[144px] h-[144px] rounded-full bg-transparent border-2 border-[#847EA4] flex justify-center items-center">
                            <div className="w-[94px] h-[94px] rounded-full bg-transparent border-2 border-[#847EA4] flex justify-center items-center">
                                <div className="w-[44px] h-[44px] rounded-full bg-transparent border-2 border-[#847EA4] flex justify-center items-center">
                                    <div className="w-[20px] h-[20px] rounded-full bg-[#703FDF] flex justify-center items-center z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RadarAnimation;
