export const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
//account apis
export const api_accountLogin = `${apiBaseUrl}/Account/login`;
export const api_accountRegistration = `${apiBaseUrl}/Account/register`;
export const api_accountUpdate = `${apiBaseUrl}/Account/registerUpdate`;
export const api_accountDelete = `${apiBaseUrl}/Account/deleteUser`;
export const api_getAllusers = `${apiBaseUrl}/Account/getAllUser`;

//students apis
export const api_getAllStudents = `${apiBaseUrl}/Students/getAll`;
export const api_createStudents = `${apiBaseUrl}/Students/create`;
export const api_updateStudents = `${apiBaseUrl}/Students/update`;
export const api_deleteStudents = `${apiBaseUrl}/Students/delete`;
export const api_uploadStudentsFile = `${apiBaseUrl}/Students/uploadStudentFile`;
export const api_bulkStudentInsert = `${apiBaseUrl}/Students/bulkStudentInsert`;
export const api_studentsPagination = `${apiBaseUrl}/Students/getAllStudentByPagination`;

//co apis
export const api_getAllCourseOutcome = `${apiBaseUrl}/CourseOutcome/getAll`;
export const api_createCourseOutcome = `${apiBaseUrl}/CourseOutcome/create`;
export const api_updateCourseOutcome = `${apiBaseUrl}/CourseOutcome/update`;
export const api_deleteCourseOutcome = `${apiBaseUrl}/CourseOutcome/delete`;
export const api_getAllCourseCoPo = `${apiBaseUrl}/CourseOutcome/getAllCourseCoPo`;

//po apis

export const api_getAllProgramOutcome = `${apiBaseUrl}/ProgramOutcome/getAll`;
export const api_createProgramOutcome = `${apiBaseUrl}/ProgramOutcome/create`;
export const api_updateProgramOutcome = `${apiBaseUrl}/ProgramOutcome/update`;
export const api_deleteProgramOutcome = `${apiBaseUrl}/ProgramOutcome/delete`;

//course apis

export const api_getAllCourse = `${apiBaseUrl}/Course/getAll`;
export const api_createCourse = `${apiBaseUrl}/Course/create`;
export const api_updateCourse = `${apiBaseUrl}/Course/update`;
export const api_deleteCourse = `${apiBaseUrl}/Course/delete`;
export const api_sectionByCourseId = `${apiBaseUrl}/Course/getSectionByCourseId`;
export const api_courseBySemesterId = `${apiBaseUrl}/Course/getCourseBySemesterId`;

//semester apis

export const api_getAllSemester = `${apiBaseUrl}/Semester/getAll`;
export const api_createSemester = `${apiBaseUrl}/Semester/create`;
export const api_updateSemester = `${apiBaseUrl}/Semester/update`;
export const api_deleteSemester = `${apiBaseUrl}/Semester/delete`;

//student Grade file

export const api_uploadStudentCo = `${apiBaseUrl}/StudentCourseOutcome/uploadStudentCourceOutcomeFile`;
export const api_bulkStudentCoInsert = `${apiBaseUrl}/StudentCourseOutcome/bulkStudentInsert`;

//Report

export const api_getCographInfo = `${apiBaseUrl}/Report/GetCoGraphInfo`;
