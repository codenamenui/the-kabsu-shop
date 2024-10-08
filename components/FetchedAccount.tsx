const FetchedAccount = ({ account }: { account: any }) => {
	return (
		<div className="bg-white rounded-lg p-4 w-1/3">
			<div>{account.studId}</div>
			<div>{account.studNumber}</div>
			<div>{account.studEmail}</div>
			<div>{account.studName}</div>
		</div>
	);
};

export default FetchedAccount;
