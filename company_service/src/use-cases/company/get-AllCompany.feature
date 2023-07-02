Feature: Get All Company.


 Scenario Outline: Try to Get All Company.
    Given Company details companyId: <companyId> to delete company
    When Try to get all company
    Then Get All Company With Result:
    # And GetCompanysDetailByEmail function will call <getCompanysDetailByEmailFunctionCallCount> time while creating new company
    # And getCompanysDetailByMobile function will call <getCompanysDetailByMobileFunctionCallCount> time while creating new company
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new company
    # And createCompany function will call <createCompanyFunctionCallCount> time while creating new company
  Examples:
      | CompanyId      | result           | message                 |
      |             | Error           | '"companyId" is required'  |
              