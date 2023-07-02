Feature: get Company By Id.

  Scenario Outline: Try to get company with invalid details, then it will throw error.
    Given Company details companyId: '<companyId>' to get company
    When Try to get company
    Then It will throw error: "<error>" with message: "<message>" while getting company
    # And GetCompanysDetailByEmail function will call <getCompanysDetailByEmailFunctionCallCount> time while creating new company
    # And getCompanysDetailByMobile function will call <getCompanysDetailByMobileFunctionCallCount> time while creating new company
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new company
    # And createCompany function will call <createCompanyFunctionCallCount> time while creating new company
  Examples:
      | CompanyId   | error           | message                    |
      |             | Error           | '"companyId" is required'  |
      | 234         | Error           | '"companyId" is not valid  |
      | abc         | Error           | '"companyId" must be number|

Scenario Outline: Try to get company with valid inputs, then it will success.
    Given Company details companyId: <companyId> to get company
    When Try to get company
    Then get company successfully message:<message>

    Examples:
      |     companyId |message|
      |         1     |'get company successfully' | 