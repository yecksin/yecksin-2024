/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const getWSP = onRequest((request, response) => {
    const body = request.body;
    logger.info(body, {structuredData: true});
  logger.info("Hello logs! 33", {structuredData: true});
  response.send("Hello from Firebase! 45");
});
