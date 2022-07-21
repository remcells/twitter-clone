import mongoose from 'mongoose';
import debugLib from 'debug';

const debug = debugLib('004-backebdxfrontend:server');

const { connect } = mongoose;

export default async (host, dbName) => {
  try {
    debug('Mongo DB connection established', host, dbName);

    await connect(host, {
      dbName,
    });
  } catch (e) {
    debug('Something went wrong', e);
  }
};
