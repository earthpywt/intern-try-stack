import React from "react";
import { useRecoilValue } from "recoil";
import { textState } from "../state";
import { Typography } from "@mui/material";

const CharacterCount: React.FC = () => {
    const text = useRecoilValue(textState);
    return (
        <Typography variant="body1">Character Count: {text.length}</Typography>
    );
};

export default CharacterCount;
