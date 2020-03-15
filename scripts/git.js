const { exec} = require("child_process");
const args = process.argv;
args.splice(0,2);
const commitMessage = args.join(" ");
if(args.length === 0){console.log("Missing Commit Message"); return}

exec(`git add . && git commit -m "${commitMessage}"`,(err,a)=>{
	if(err){throw new Error("Error")};
	exec("git push origin master",(err,a)=>{
		if(err){throw new Error("Error")};
		console.log(`Pushed Commit: ${commitMessage}`);
		})
})
