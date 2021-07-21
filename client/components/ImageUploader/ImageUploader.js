import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';

export default function ImageUploader(props){
    const { onUploadHandle } = props;

    const onDrop = useCallback(acceptedFiles => {
        onUploadHandle(acceptedFiles);
    }, [])

    const {getRootProps, getInputProps, acceptedFiles}  = useDropzone({onDrop});

    return (
        <>
        <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px'}}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <span style={{ fontSize: '18px', fontWeight: '400'}}>Click me or drag file to upload.</span>
            </div>
        </div>
        <List>
            {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                <ListItem key={acceptedFile.name}>
                    <ListItemIcon>
                        <ImageOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>
                        {acceptedFile.name}
                    </ListItemText>
                </ListItem>
            ))}
        </List>
        </>
    );
}