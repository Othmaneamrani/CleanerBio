import { StyleSheet, Image,Text, View } from "react-native";
import FooterSecond from "./FooterSecond";
import NavbarSecond from "./NavbarSecond";
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import ImagePicker from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';



export default function Images() {
  const [imageSource, setImageSource] = useState();
  const [galleryImages, setGalleryImages] = useState([]);
  const [finImage, setFinImage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cpt, setCpt] = useState(0);

  useEffect(() => {
    const initializeGallery = async () => {
      try {
        await requestGalleryPermission();
        await fetchGalleryImages();
    
        if (galleryImages.length === 0) {
          await updateGalleryImages();
          setCpt((prevCpt) => prevCpt + 1);
        }
    
        if (galleryImages.length > 0) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error during initialization:', error);
      }
    };
    initializeGallery();
  }, [cpt]);


  const requestGalleryPermission = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access gallery was denied');
      }
    } catch (error) {
      console.error('Error requesting gallery permission:', error);
    }
  };


    

  const fetchGalleryImages = async () => {
    try {
      const appDirectory = RNFS.ExternalDirectoryPath + '/CleanerBio'; 
  
      const albums = await RNFS.readDir(appDirectory);
      const allImages = [];
  
      for (const album of albums) {
        const photos = await RNFS.readDir(album.path);
  
        if (photos.length > 0) {
          const imageAssets = photos.filter((photo) => photo.name.endsWith('.jpg'));
  
          if (imageAssets.length > 0) {
            allImages.push(...imageAssets.map((image) => ({ uri: 'file://' + image.path })));
          }
        }
      }
  
      if (allImages.length > 0) {
        setGalleryImages(allImages);
        updateGalleryImages();
      } else {
        console.log('No images found.');
      }
    } catch (error) {
      console.error('Error fetching gallery images:', error);
    }
  };
  

const updateGalleryImages = async () => {
    if (galleryImages.length > 0) {
      setFinImage(false);
      const randomIndex = Math.floor(Math.random() * galleryImages.length);
      const randomImage = galleryImages[randomIndex];
      setImageSource(randomImage);
      setGalleryImages((prevImages) => prevImages.filter((img) => img.id !== randomImage.id));
    } else {
      setFinImage(true);
    }
  };



  const shareImage = async () => {
    try {
      const filePath = RNFS.TemporaryDirectoryPath + 'image.jpg';
      await RNFS.downloadFile({ fromUrl: imageSource.uri, toFile: filePath }).promise;
      await Share.open({ url: 'file://' + filePath });
    } catch (error) {
      console.error(`Erreur lors de l'ouverture de l'URL : ${error.message}`);
    }
  };


  const deleteImage = async () => {
    try {
        console.log("ee");
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'image : ${error.message}`);
    }
  };
  

  

  return (
    <View style={styles.container}>
      <NavbarSecond />
      <View style={styles.content}>
        {imageSource && <Image source={imageSource} style={{ flex: 1, width: '100%', resizeMode: 'contain' }} />}
        {finImage && <Text style={{fontWeight: 'bold'}} >No images available anymore. </Text>}
        {isLoading && <Text>Loading...</Text>}
      </View>
      <FooterSecond updateGallery ={updateGalleryImages}  ShareMedia={shareImage} deleteMedia={deleteImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


    // exemple de uri : file:///storage/emulated/0/Pictures/Gallery/owner/compilation /IMG-20230513-WA0011.jpg