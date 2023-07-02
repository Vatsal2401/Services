Feature: update Employee By Id.

  Scenario Outline: Try to update employee with invalid details, then it will throw error.
    Given Employee details name:'<name>' employeeId: '<employeeId>' to update employee
    When Try to update employee
    Then It will throw error: '<error>' with message: '<message>' while updating employee
    # And GetEmployeesDetailByEmail function will call <getEmployeesDetailByEmailFunctionCallCount> time while creating new employee
    # And getEmployeesDetailByMobile function will call <getEmployeesDetailByMobileFunctionCallCount> time while creating new employee
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new employee
    # And createEmployee function will call <createEmployeeFunctionCallCount> time while creating new employee
  Examples:
      | employeeId |name          | error           | message                 |
      |        | vatsal     | Error             | \"id\" is required  |
      | 23     |           | Error           | \"name\" is required    |
      |abc     |  vatsal   | Error              | \"id\" must be a number|
      |50      | vatsal    | Error              |  employee does not Exists|

 Scenario Outline: Invalid employeeName input then throw error.
    Given Second Enter employeeid: <employeeid> and updated employeename: <employeeName> for updating a employee
    When Try to update employee
    Then It will throw error: '<error>' with message: '<message>' while updating employee

    Examples:
        |   employeeid   |    employeeName     | error       | message                       |
        # Invalid scenarios
        |   32       |  12345       | Error       |\"name\" must be a string    |


Scenario Outline: Try to update employee with valid inputs, then it will success.
    Given Third Enter employeeid: <employeeId> and updated employeename: '<name>' for update a employee
    When Try to update employee
    Then update employee successfully message:"<message>"

    Examples:
      |     employeeId | name         |message|
      |      1        |  vatsal      | update employee successfully | 