import React from "react";
import { View, Text } from "react-native";
import { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native";

import { Camera, CameraPositions } from 'react-native-deepar';
import DeepAR, { IDeepARHandle, TextureSourceTypes } from 'react-native-deepar';
import RNFetchBlob from 'rn-fetch-blob';

function App():JSX.Element {

  const deepARRef = useRef<IDeepARHandle>(null);

  useEffect(() => {
    (async()=>{
      const cameraPermission = await Camera.getCameraPermissionStatus();
      const microphonePermission = await Camera.getMicrophonePermissionStatus();
      
     
        try{
          //8bithearts (works)
          // RNFetchBlob.config({
          //   fileCache: true,
          // })
          //   .fetch('GET', 'http://betacoins.magix.net/public/deepar-filters/8bitHearts')
          //   .then((res) => {
          //     deepARRef?.current?.switchEffectWithPath({
          //       path: res.path(),
          //       slot: 'effect',
          //     });
          //     console.log("Effect Switched baby");
          //   });

          //background segmentation
          // RNFetchBlob.config({})
          // .fetch('GET', 'https://random.imagecdn.app/450/800')
          // .then((res) => {
          //   deepARRef?.current?.changeParameterTexture({
          //     gameObject: 'Background',
          //     component: 'MeshRenderer',
          //     parameter: 's_texColor',
          //     type: TextureSourceTypes.BASE64,
          //     value: res.base64(),
          //   });
          //   console.log("Effect changed babyyy")
          // });

          //mine
          deepARRef?.current?.switchEffectWithPath({          
            path: './assets/effects/Burning_Effect/burning_effect.deepar',
            slot: 'effect',
          });
          console.log("Effect Switched baby");  

        } catch (e: any) {
          console.log(e.message);
        }
      
    })()
    
  }, [])

  return (
    <SafeAreaView style={{flex:1}}>
      <DeepAR
        ref={deepARRef}
        apiKey="83b450eb562622afbea7efdac1dfdb943aa62eb7173f6218772bbd942b65e9fa4e14575344396798"
        style={{ flex: 1 }}
        position={CameraPositions.FRONT}
        onInitialized={() => {
          // ..
          console.log("Yeetus");
        }}
        onError={(e)=>{
          console.log("There was an error");
        }}
      />
    </SafeAreaView>
  );
}

export default App;

