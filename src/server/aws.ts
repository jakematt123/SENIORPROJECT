// Step 1: Import the S3Client object and all necessary SDK commands.
import { S3Client } from '@aws-sdk/client-s3';
import { env } from '~/env';


// Step 2: The s3Client function validates your request and directs it to your Space's specified endpoint using the AWS SDK.
export const s3Client = new S3Client({
    endpoint: env.DOENDPOINT,
    forcePathStyle: false,
    region: "us-east-1",
    credentials: {
        accessKeyId: env.DOACCESS,
        secretAccessKey: env.SPACES_SECRET || '' // Provide a default value of an empty string if process.env.SPACES_SECRET is undefined.
    }
});


/*
const params = {
    Bucket: "usfseniorproject2024",
    Key: "folder-path/hello-world.txt",
    Body: "Hello, World!",
    ACL: "private",
    Metadata: {
        "x-amz-meta-my-key": "your-value"
    }
};
*/


