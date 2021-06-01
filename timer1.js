const args = process.argv.slice(2);

for(let i = 0; i < args.length; i ++){
  if(isNaN(args[i])){
    continue;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Alarm after ${args[i]} seconds`);
    }, args[i] * 1000);
  }

}
