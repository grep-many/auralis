import { LinearGradientProps } from "expo-linear-gradient";
import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export interface AppGradientProps extends Pick<LinearGradientProps, 'colors'> {
  children: ReactNode;
}

export interface ContentProps {
  children: ReactNode
}

export interface GuidedAffirmationGalleryProps {
    title:string;
    previews:GalleryPreviewData[];
}

export interface AffirmationCategory {
    title:string;
    data:GalleryPreviewData[];
}

export interface GalleryPreviewData {
    id:number;
    text:string;
    image:ImageSourcePropType;
}