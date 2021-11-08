import { createAccount, fetchHomeUrl, fetchPrincipalUrl, serviceDiscovery } from '../../../account';
import { getBasicAuthHeaders } from '../../../util/authHelpers';

let authHeaders: {
  authorization?: string;
};

beforeAll(async () => {
  authHeaders = getBasicAuthHeaders({
    username: process.env.CREDENTIAL_NEXTCLOUD_USERNAME,
    password: process.env.CREDENTIAL_NEXTCLOUD_PASSWORD,
  });
});

test('serviceDiscovery should be able to discover the caldav service', async () => {
  const url = await serviceDiscovery({
    account: {
      serverUrl: `${process.env.CREDENTIAL_NEXTCLOUD_SERVER_URL}/remote.php/dav`,
      accountType: 'caldav',
    },
    headers: authHeaders,
  });
  expect(url).toEqual(`${process.env.CREDENTIAL_NEXTCLOUD_SERVER_URL}/remote.php/dav/`);
});

test('fetchPrincipalUrl should be able to fetch the url of principle collection', async () => {
  const url = await fetchPrincipalUrl({
    account: {
      serverUrl: `${process.env.CREDENTIAL_NEXTCLOUD_SERVER_URL}/remote.php/dav`,
      rootUrl: `${process.env.CREDENTIAL_NEXTCLOUD_SERVER_URL}/remote.php/dav`,
      accountType: 'caldav',
    },
    headers: authHeaders,
  });
  expect(url).toMatch(/http:\/\/.+\/remote\.php\/dav\/principals\/users\/.+\//);
});

test('fetchHomeUrl should be able to fetch the url of home set', async () => {
  const principalUrl = await fetchPrincipalUrl({
    account: {
      serverUrl: `${process.env.CREDENTIAL_NEXTCLOUD_SERVER_URL}/remote.php/dav`,
      rootUrl: `${process.env.CREDENTIAL_NEXTCLOUD_SERVER_URL}/remote.php/dav`,
      accountType: 'caldav',
    },
    headers: authHeaders,
  });
  const url = await fetchHomeUrl({
    account: {
      principalUrl,
      serverUrl: `${process.env.CREDENTIAL_NEXTCLOUD_SERVER_URL}/remote.php/dav`,
      rootUrl: `${process.env.CREDENTIAL_NEXTCLOUD_SERVER_URL}/remote.php/dav`,
      accountType: 'caldav',
    },
    headers: authHeaders,
  });
  expect(url).toMatch(/http:\/\/.+\/remote\.php\/dav\/calendars\/.+\//);
});

test('createAccount should be able to create account', async () => {
  const account = await createAccount({
    account: {
      serverUrl: `${process.env.CREDENTIAL_NEXTCLOUD_SERVER_URL}/remote.php/dav`,
      accountType: 'caldav',
    },
    headers: authHeaders,
  });
  expect(account.rootUrl).toEqual(`${process.env.CREDENTIAL_NEXTCLOUD_SERVER_URL}/remote.php/dav/`);
  expect(account.principalUrl).toMatch(/http:\/\/.+\/remote\.php\/dav\/principals\/users\/.+\//);
  expect(account.homeUrl).toMatch(/http:\/\/.+\/remote\.php\/dav\/calendars\/.+\//);
});
