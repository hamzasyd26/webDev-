console.log("hell0");

async function getdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(445);
    }, 3000);
  });
}
async function main() {
  console.log("loading modules");
  console.log("load data");

  let data = await getdata();

  console.log(data);
  console.log("process data");
}

main()
