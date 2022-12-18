import React from 'react';

import classes from '../styles/EditPlaylist.module.css';
import addPhoto from '../resources/add_photo.svg';

function EditPlaylist() {
  return (
    <div>
      <div className={classes.header}>
        Редактирование плейлиста
      </div>
      <div className={classes.edit_container}>
        <div className={classes.add_photo_form}>
          <img src={addPhoto} alt="" />
          <input type="file" id="file-input" src={addPhoto} />
        </div>
        <div>
          <div className={classes.title}>Название плейлиста</div>
          <div className={classes.description}>Описание</div>
        </div>
      </div>
    </div>
  );
}

export default EditPlaylist;
