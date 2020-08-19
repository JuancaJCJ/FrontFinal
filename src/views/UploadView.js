import React, {useState} from 'react';
import UploadForm from '../components/UploadForm';
import {uploadCard} from '../services/CardServices';
import Grid from "@material-ui/core/Grid";

function Upload(props){

    const [card, setCard] = useState({
        title: "",
        photo: "",
        description: ""
      });

    const onSubmit = () => {
        uploadCard(card, props);
      };

      const onType = (event) => {
        switch (event.target.id) {
          case "title":
            setCard({
              ...card,
              title: event.target.value,
            });
            break;
          case "photo":
            setCard({
              ...card,
              photo: event.target.value,
            });
            break;
            case "description":
            setCard({
              ...card,
              description: event.target.value,
            });
            break;
    
          default:
            break;
        }
      };

    return(
        <div>
          <Grid container justify='center'>
            <UploadForm onSubmit={onSubmit} onType={onType}/>
          </Grid>
        </div>
    )
}

export default Upload;