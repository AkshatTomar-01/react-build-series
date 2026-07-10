const StudentCard = (props) => {
    return (
        <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm border w-60">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Branch: {props.branch}</p>
            <p>Year: {props.year}</p>
            <p>Grade: {props.grade}</p>
        </div>
    );
}

export default StudentCard;