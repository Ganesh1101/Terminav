import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Map360View = ({ route }) => {
  const { lat, lng } = route.params;
  
  console.log(lat,lng)
  // HTML content with iframe
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
        }
        iframe {
          border: 0;
          width: 100vw;
          height: 100vh;
        }
      </style>
    </head>
    <body>
      <iframe
        src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBVUU5GGLa_qQhamBZnJvt1mPgxoFANTZ8&location=${encodeURIComponent(lat)},${encodeURIComponent(lng)}&heading=150&pitch=10&fov=100"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ html: htmlContent }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        style={styles.webView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default Map360View;
