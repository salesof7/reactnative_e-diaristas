import React from 'react';
import { Avatar } from 'react-native-paper';
import { 
    UserInformationContainer, 
    InformationContainer, 
    UserName, 
    UserDescription, 
    RatingStyled 
} from './style';

export interface UserInformationProps {
    picture: string;
    name: string;
    rating: number;
    description?: string;
    darker?: boolean;
}

export function UserInformation(props: UserInformationProps){
    return (
        <UserInformationContainer darker={Boolean(props.darker)}>
            <Avatar.Image source={{ uri: props.picture }} />
            <InformationContainer>
                <UserName>{props.name}</UserName>
                <RatingStyled 
                    defaultRating={props.rating}
                />
                <UserDescription>{props.description}</UserDescription>
            </InformationContainer>
        </UserInformationContainer>
    )
}