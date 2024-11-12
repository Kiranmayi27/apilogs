const { exec } = require('child_process');

const sync = ()=>{
exec('/home/ubuntu/apilogs/script-to-uploadS3/push-to-s3.sh', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
}

module.exports=sync;
