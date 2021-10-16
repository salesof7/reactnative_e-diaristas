import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './style';

interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
    return (
        <PageTitleContainer>
            <PageTitleStyled>{ title }</PageTitleStyled>
            <PageSubtitleStyled>{ subtitle }</PageSubtitleStyled>
        </PageTitleContainer>
    )
}