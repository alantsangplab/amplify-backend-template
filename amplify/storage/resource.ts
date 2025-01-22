import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'unityhologramiotupdate',
  access: (allow) => ({
    'example/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
  })
});