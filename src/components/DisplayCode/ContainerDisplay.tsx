interface DisplayCodeProps {
    fullCode: string;
    displayedCode: string;
}

function ContainerDisplay({ fullCode, displayedCode }: DisplayCodeProps) {
    return (
        <>
            <div className="border border-[#703FDF] bg-[#130929] p-4 w-full lg:w-1/2">
                {/* Circles */}
                <div className="flex gap-x-2">
                    <div className="w-4 h-4 rounded-full bg-[#703FDF]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#703FDF]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#703FDF]"></div>
                </div>

                {/* Display */}
                <div className="cursor-default select-none border border-[#703FDF] bg-[#12101B] mt-4 relative px-2 py-4 w-full h-fit overflow-hidden ">
                    <pre className=" relative z-0 opacity-0 text-[0.6rem] text-[#E9E9EB] lg:text-sm mobileM:text-[0.7rem] tabletS:text-[0.8rem]">
                        {fullCode}
                    </pre>
                    <pre className="absolute font-baiJumjuree font-medium top-4 z-10 text-[0.6rem] text-[#E9E9EB] lg:text-sm mobileM:text-[0.7rem] tabletS:text-[0.8rem]">
                        {displayedCode}
                    </pre>
                </div>
            </div>
        </>
    );
}

export default ContainerDisplay;
