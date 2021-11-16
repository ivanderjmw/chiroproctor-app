import React from 'react';

import { useSubscription } from 'mqtt-react-hooks';

export default function Status() {
  /* Message structure:
   *  topic: string
   *  message: string
   */
  const { message } = useSubscription([
    'room/esp32/testing',
    'room/esp32/light',
  ]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Example</h2>
        <span>{message ? `topic:${message.topic} - message: ${message.message}` : message}</span>
      </div>
    </>
  );
}
