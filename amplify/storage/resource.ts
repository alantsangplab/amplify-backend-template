import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'unityhologramiotupdate',
  access: (allow) => ({
    'example/*': [
        allow.authenticated.to(['get']),
        allow.guest.to(['get']),
        allow.entity('identity').to(['get'])
    ],
    'version/*': [
      allow.authenticated.to(['get']),
      allow.guest.to(['get']),
      allow.entity('identity').to(['get'])
    ],
  })
});