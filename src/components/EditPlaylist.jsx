import React, { useState } from 'react';

import classes from '../styles/EditPlaylist.module.css';
import addPhoto from '../resources/add_photo.svg';
import submitIcon from '../resources/submit_icon.svg';

function EditPlaylist() {
  const [playlistСover, setPlaylistCover] = useState(addPhoto);

  function addPlaylistCover(event) {
    setPlaylistCover(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div>
      <div className={classes.header}>
        <div>
          Редактирование плейлиста
        </div>
        <div className={classes.submit__icon}>
          <a href="playlist">
            <img src={submitIcon} alt="" />
          </a>
        </div>
      </div>
      <div className={classes.edit_container}>
        <div className={classes.add_photo_form} onClick={() => document.getElementById('file-input').click()}>
          <div className={classes.mask}>
            <img src={playlistСover} alt="" />
            <input type="file" id="file-input" accept="image/*,.png,.jpg,.web" onChange={addPlaylistCover} hidden />
          </div>
        </div>
        <div>
          <div>
            <div contentEditable className={classes.title__conteiner}>
              <span className={classes.title}>Название плейлиста</span>
            </div>
          </div>
          <div contentEditable className={classes.description__conteiner}>
            <span className={classes.description}>Описание</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPlaylist;
