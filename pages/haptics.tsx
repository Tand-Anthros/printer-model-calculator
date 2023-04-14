import React from 'react';
import {
  useLocalStore,
} from '@deep-foundation/store/local';
import {
  DeepProvider,
  useDeep,
} from '@deep-foundation/deeplinks/imports/client';
import { Button, ChakraProvider, Stack, Text } from '@chakra-ui/react';
import { Provider } from '../imports/provider';
import { Device } from '@capacitor/device';
import { saveDeviceData } from '../imports/device/save-device-data';
import { createAllCallHistory } from '../imports/packages/callhistory/callhistory';
import { createAllContacts, initPackageContact } from '../imports/packages/contact/contact';
import { createTelegramPackage } from '../imports/packages/telegram/telegram';
import { NavBar } from '../components/navbar';
import { useHapticVibrate } from '../imports/packages/haptics/haptics';

function Content() {
  const deep = useDeep();
  const [deviceLinkId] = useLocalStore(
    'deviceLinkId',
    undefined
  );

  useHapticVibrate({deviceLinkId});

  return (
    <Stack>
      <NavBar/>
    </Stack>
  );
}

export default function HapticsPage() {
  return (
    <ChakraProvider>
      <Provider>
        <DeepProvider>
          <Content />
        </DeepProvider>
      </Provider>
    </ChakraProvider>
  );
}
