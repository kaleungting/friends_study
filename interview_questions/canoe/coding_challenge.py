# Q1. Given a SQL database with the following table full of data
# CREATE TABLE countries(
#     code CHAR(2) NOT NULL,
#     year INT NOT NULL,
#     gdp_per_capita DECIMAL(10, 2) NOT NULL,
#     govt_debt DECIMAL(10, 2) NOT NULL
# )

# Please write the SQL statement to show the top 3 average government debts in percent of the
# gdp_per_capita for those countries of which gdp_per_capita was over 40, 000 dollars in every year in the
# last four years.

SELECT code, (SELECT SUM(govt_debt)/gdp_per_capita) AS avg_govt_debt
FROM countries
WHERE
year BETWEEN 2016 AND 2020
AND
gdp_per_capita > 40000
ORDER BY
avg_govt_debt
LIMIT
3

# Q2. OOP general programming:
# In the real world, a man has a mouth. His mouth can do operations like open/close at the man's will.
# Another man cannot force a man to do such operations without the man's permission. For example, a doctor
# can examine his mouth and request him to do such operations and he will follow the doctor's requests after
# confirming the doctor's identity. For others, he doesn't want them to do such operations. Use OOP Designs
# to make needed classes with methods to meet those requirements. You can use any language or
# pseudo-code to write down your results.


class Person:
    def __init__(self, occupation=""):
        self.mouth = "closed"
        self.occupation = occupation

    def open_mouth(self, person_asking=None):
        if (person_asking is None or person_asking.occupation == "Doctor"):
            self.mouth = "opened"

    def close_mouth(self, person_asking=None):
        if (person_asking is None or person_asking.occupation == "Doctor"):
            self.mouth = "closed"


dr_bill = Person("Doctor")
jim = Person()
sean = Person()

sean.open_mouth()  # sean opens his own mouth
sean.close_mouth()  # sean closes his own mouth
sean.open_mouth(dr_bill)  # Dr. Bill asks Sean to open his mouth
sean.close_mouth(jim)  # Jim asks Sean to close his mouth
print(sean.mouth)

# Q3. Please complete jQuery and PHP code to prepare the inputs for model updating.
# In a form, we have three input boxes for users to type in their choices of courses and submit the form
# without refreshing the page(i.e using ajax request). Here are the requirements:
# 1. User can type in 1, 2 or 3 courses
# 2. Each choice is case insensitive(also, user can type anything, in any case or leave it empty)
# 3. The choices have to contain “calculus”( in any case, e.g “Calculus” or “CALCULUS”) in one input
# box.
# 4. Because form onsubmit returns false, the form is submitted through ajax by calling submitForm(),
# add your Javascript/jQuery code inside of this function.
# 5. The PHP on the server side needs to do the same validation as in Javascript/jQuery to make sure
# data is consistent.
# <form action = "/post" onsubmit = "submitForm();return false;" >
# Choice A: < input type = "text" name = "choices[]"/>
# Choice B: < input type = "text" name = "choices[]"/>
# Choice C: < input type = "text" name = "choices[]"/>
# <input type = "submit" value = "Submit"/>
# </form >
# Finish the Javascript/jQuery and PHP code after each “// add your code after this line” shown below.
# JQuery:
function submitForm() {
    var $form = $('form')
    var url = $('form').attr('action')
    let newChoices = []
    $(: text).each((obj)=> {
        newChoices.push(obj.val().toLowerCase())
    })
    if (newChoices.includes("calculus")){$.ajax({
        type: "post",
        url,
        data: form.serialize()
        success: function(data){
            console.log("Submission was successful")
            console.log(data)
        },
        error: function(data){
            console.log("An error occurred")
            console.log(data)
        }
    })
    }
}
# PHP:


# class MyController extends Controller {
#     public function post() {$inputs = Input: : all()
#                             // add your code after this line
#                             // end of add your code
#                             if($this -> save($inputs)) {
#         return ['status' = >'success']
#     } else {
#         return ['status' = >'error', 'errorMessage' = > $this -> getLastErrorMessage()]
#     }
#     }
# }
