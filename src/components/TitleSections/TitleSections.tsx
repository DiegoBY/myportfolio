interface TitleSectionProps {
    titleSection: string;
}

function TitleSections({ titleSection }: TitleSectionProps) {
    return (
        <>
            <div>
                <p className="text-[#E9E9EB] text-3xl font-bold">
                    <span className="text-[#703FDF] selection:bg-[#703FDF] selection:text-[#E9E9EB]">
                        #
                    </span>
                    <span className="selection:bg-[#E9E9EB] selection:text-[#703FDF] ">
                        {titleSection}
                    </span>
                </p>
            </div>
        </>
    );
}

export default TitleSections;
