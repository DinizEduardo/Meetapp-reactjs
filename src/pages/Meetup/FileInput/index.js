import React, { useState, useEffect, useRef } from 'react';

import { MdCameraAlt } from 'react-icons/md';
import { useField } from '@rocketseat/unform';
import { ImageSpace } from './styles';

import api from '../../../services/api';

export default function FileInput({ image, value }) {
  const { defaultValue, registerField } = useField('file');

  const [preview, setPreview] = useState(defaultValue && defaultValue.id);
  const [file, setFile] = useState(defaultValue && defaultValue.url);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    console.tron.log(response);

    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  const ref = useRef();

  useEffect(() => {
    if (image && value) {
      setPreview(image);
      setFile(value);
    }
  }, [image, value]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'id_file',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  return (
    <>
      <input
        type="file"
        id="file"
        data-file={file}
        accept="image/*"
        onChange={handleChange}
        hidden
        ref={ref}
      />
      <ImageSpace htmlFor="file">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <>
            <MdCameraAlt size={36} color="#777" />
            <p>Selecionar imagem</p>
          </>
        )}
      </ImageSpace>
    </>
  );
}
