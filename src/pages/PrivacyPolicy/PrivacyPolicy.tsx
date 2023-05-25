import { useState } from "react";
// import useDetectDevice from "../../hooks/useDetectDevice";
import { ContentLinksWrapper, PrivacyContainer } from "./PrivacyPolicy[Style]";
import { Link } from "react-router-dom";

type Props<S extends string, AO = object[]> = {
    caption: S;
    detailsCaption: {
        header: string;
        subHeader: string;
    };
    details: AO;
    tableContent: AO;
};

function PrivacyPolicy(): JSX.Element {

    // const { isDesktop } = useDetectDevice();

    function GetCurrentDate(): string {
        const date = new Date().toDateString()
        const d = DateStyle: "full"
        return d.format(date)
        }

    const [data] = useState<Props<string>>({
        caption: "Privacy Policy",
        detailsCaption: {
            header: "This Privacy Policy outlines the types of information we collect, how we use and protect it, and the choices individuals have regarding their personal data",
            subHeader: ""
        },
        details: [
            {
                parentText:"Introduction",
                childText:["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {
                parentText:"How we use Your information",
                childText:["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {parentText:"Information Sharing and Disclosure",
             childText:["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {parentText:"Your Rights and Choices",
             childText:["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
        ],

        tableContent: [
            {
                parentLink: "Introduction",
                childLinks: [
                    ""
                ]
            },
            {
                parentLink: "How We Use Your Information",
                childLinks: [
                    ""
                ]
            },
            {
                parentLink: "Information Sharing and Disclosure",
                childLinks: [
                    ""
                ]
            },
            {
                parentLink: "Your Rights and Choices",
                childLinks: [
                    ""
                ]
            }
        ]
    });

    return (
        <section
            className="container-desktop w-100 p-sm"
        >
            <div className="d-col h-100 gap-xxxl justify-center align-center ">
                <header className="d-col justify-center align-center">
                    <h1 className="font-light font-xxl">{data.caption}</h1>
                    <p className="font-light font-md">{GetCurrentDate()}</p>
                </header>
                <PrivacyContainer
                    // className={`d-grid ${!isDesktop ? "gap-xl p-sm font-sm" : " sub-container gap-md grid-2"}`}
                    className="gap-xxl"
                >
                    <div className="d-col gap-lg">
                        <h3 className="font-light font-md">Table of contents</h3>
                        <ContentLinksWrapper
                            className="d-col gap-lg"
                        >
                            {
                                data.tableContent.map((link: object, index: number) => {
                                    return (
                                        <Link
                                            to={""}
                                            className={"d-col gap-sm"}
                                        >
                                            <p className="content-link-header font-light font-sm">
                                                {`${index + 1}.`}
                                                {Object(link).parentLink}
                                            </p>
                                        </Link>
                                    )
                                })
                            }
                        </ContentLinksWrapper>
                    </div>
                    <div className="d-col gap-md">
                        <div className="d-col gap-lg">
                            <h4 className="font-light font-sm font-w-sm">
                                {data.detailsCaption.header}
                            </h4>
                            <p className="font-light font-md">
                                {data.detailsCaption.subHeader}
                            </p>
                        </div>
                        <h3 className="d-col font-light gap-lg font-w-sm font-sm">
                            {
                                data.details.map((newData:object) => (
                                    <div
                                        className="d-col gap-sm"
                                    >
                                        <p className="d-col gap-md font-md">
                                            {Object(newData).parentText}
                                        </p>
                                        <p className="d-col gap-md font-sm">
                                            {Object(newData).childText}
                                        </p>
                                    </div>
                                ))
                            }
                        </h3>
                    </div>
                </PrivacyContainer>
            </div>
        </section>
    )
}

export default PrivacyPolicy;

