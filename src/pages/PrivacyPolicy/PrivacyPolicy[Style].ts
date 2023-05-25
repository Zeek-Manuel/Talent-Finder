import styled from "styled-components";

const ContentLinksWrapper = styled.div`
    .content-link-header {
        text-decoration: underline;
        text-decoration-color: var(--secondary-color);
        transition: .2s ease;
    }

    a:hover > .content-link-header {
        text-decoration: underline;
        text-decoration-color: var(--main-theme_2);
    }


    a:hover > .content-link-header {
        color: var(--main-theme_2);
    }
`;

const PrivacyContainer = styled.div`
    display: grid;
    grid-template-columns: .5fr 1.5fr;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export {
    ContentLinksWrapper,
    PrivacyContainer
}

