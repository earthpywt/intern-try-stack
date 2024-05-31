import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../state";
import { TextField } from "@mui/material";

const TextInput: React.FC = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <TextField
            label="Text Input"
            variant="outlined"
            value={text}
            onChange={onChange}
            fullWidth
            margin="normal"
            sx={{ width: "75%" }}
        />
    );
};

export default TextInput;
