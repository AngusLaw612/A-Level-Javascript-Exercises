let students = [];
let marks = [];
let maxStudents = 5;

document.getElementById('btnEnter').addEventListener('click', function() {
    students = [];
    document.getElementById('inputSection').style.display = 'block';
});

document.getElementById('btnAdd').addEventListener('click', function() {
    if (students.length < maxStudents) {
        const name = document.getElementById('studentName').value;
        const mark = parseInt(document.getElementById('examMark').value);

        if (name && !isNaN(mark)) {
            students.push(name);
            marks.push(mark);
            document.getElementById('studentName').value = '';
            document.getElementById('examMark').value = '';

            if (students.length === maxStudents) {
                document.getElementById('btnDisplay').disabled = false;
            }
        } else {
            alert('Please enter valid name and mark.');
        }
    } else {
        alert('Maximum of 5 students reached.');
    }
});

document.getElementById('btnDisplay').addEventListener('click', function() {
    let total = 0;
    let max = marks[0];
    let min = marks[0];
    let maxIndex = 0;
    let minIndex = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] > max) {
            max = marks[i];
            maxIndex = i;
        }
        if (marks[i] < min) {
            min = marks[i];
            minIndex = i;
        }
    }

    const average = total / marks.length;
    const displayText = `
        Grade Analysis
        Average: ${average.toFixed(2)}
        Min: ${min} (Name: ${students[minIndex]})
        Max: ${max} (Name: ${students[maxIndex]})
    `;

    document.getElementById('output').innerText = displayText;
});

document.getElementById('btnLoadData').addEventListener('click', function() {
    const testData = [
        { name: "David", mark: 56 },
        { name: "Rosmary", mark: 76 },
        { name: "Amina", mark: 91 },
        { name: "Terry", mark: 78 },
        { name: "Bilal", mark: 47 }
    ];

    testData.forEach(student => {
        students.push(student.name);
        marks.push(student.mark);
    });

    alert("Names and Grades Loaded");
    document.getElementById('btnDisplay').disabled = false;
});
