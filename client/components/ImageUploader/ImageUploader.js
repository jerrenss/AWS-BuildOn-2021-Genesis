import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import { makeStyles } from '@material-ui/core/styles';

export default function ImageUploader(props){
    const { onUploadHandle } = props;
    const [typeOfScan, setTypeOfScan] = useState('');
    const [typeOfOrgan, setTypeOfOrgan] = useState('');
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 200,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    const classes = useStyles();
    const onDrop = useCallback(acceptedFiles => {
        onUploadHandle(acceptedFiles);
    }, [])
    const {getRootProps, getInputProps, acceptedFiles}  = useDropzone({onDrop});

    const handleTypeOfScanChange = (event) => {
        setTypeOfScan(event.target.value)
    }

    const handleTypeOfOrganChange = (event) => {
        setTypeOfOrgan(event.target.value);
    }
    
    return (
        <>
        <GridContainer justifyContent="center" alignItems="center" direction="row">
            <GridItem xs={4}><span>Please Select Type Of Scan:</span></GridItem>
            <GridItem xs={6}>
                <FormControl className={classes.formControl} variant="outlined">
                    <InputLabel>Type Of Scan</InputLabel>
                    <Select value={typeOfScan} onChange={handleTypeOfScanChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value='X-Ray'>X-Ray</MenuItem>
                        <MenuItem value='CT Scan'>CT Scan</MenuItem>
                        <MenuItem value='Ultrasound'>Ultrasound</MenuItem>
                        <MenuItem value='MRI'>MRI</MenuItem>
                    </Select>
                </FormControl>
            </GridItem>
        </GridContainer>
        <GridContainer justifyContent="center" alignItems="center" direction="row">
            <GridItem xs={4}><span>Please Select Organ:</span></GridItem>
            <GridItem xs={6}>
                <FormControl className={classes.formControl} variant="outlined">
                    <InputLabel>Organ</InputLabel>
                    <Select value={typeOfOrgan} onChange={handleTypeOfOrganChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value='Lungs'>Lungs</MenuItem>
                        <MenuItem value='Brain'>Brain</MenuItem>
                        <MenuItem value='Liver'>Liver</MenuItem>
                        <MenuItem value='Heart'>Heart</MenuItem>
                        <MenuItem value='GallBladder'>GallBladder</MenuItem>
                        <MenuItem value='Kidney'>Heart</MenuItem>    
                    </Select>
                </FormControl>
            </GridItem>
        </GridContainer>
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