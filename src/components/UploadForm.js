import React from 'react';
import {
    TextField,
    Card,
    Grid,
    Box,
    Button,
    Typography
  } from "@material-ui/core";
  import {
      Label,
      FormGroup,
      Input   
} from 'reactstrap';


function UploadForm({ onSubmit, onType }) {

    
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card>
                <Box p={3}>
                    <FormGroup>

                        <Typography variant="h5" color="initial">Sube tu imagen</Typography>

                        <Box my={2}>
                            <TextField onChange={onType} fullWidth id="title" label="Título" />
                        </Box>

                        <Box my={2}>
                            <Label for="File">Archivo</Label>
                            <Input type="file" name="photo" id="photo" onChange={onType}/>
                        </Box>

                        <Box my={2}> 
                            <Label for="description">Descripción</Label>
                            <Input type="textarea" name="text" id="description" onChange={onType}/>
                        </Box>

                        <Button onClick={onSubmit} mt={3} variant="contained" color="primary" fullWidth>
                            ¡Súbela!
                        </Button>

                    </FormGroup>
                </Box>
            </Card>
        </Grid>
    );
}

export default UploadForm;
