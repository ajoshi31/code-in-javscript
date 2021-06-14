-- Q1
SELECT DISTINCT(A.id) as new_id, A.*, 
CASE WHEN 
    EXISTS (SELECT * from mtp_mock_analytics B where B.mock_id = A.id and B.student_id= 7) 
    THEN 1 
    ELSE 0 
END as complete 
from mtp_resource_data A,mtp_mock_analytics 
where A.resource_type= 5 and A.exam_id= 30


-- Q2
SELECT A.*, 
CASE WHEN 
    EXISTS (SELECT * from mtp_mock_analytics B where B.mock_id = A.id and B.student_id = 7) 
    THEN 1 
    ELSE 0 
END as complete 
from mtp_resource_data A 
where A.resource_type = 6 and A.exam_id = 30 AND A.org_id In 
( SELECT org_id FROM mtp_batch , mtp_student_batch where org_id in (2) 
and exam_id = 30 and student_id = 7 and mtp_batch.status = 1 
and mtp_student_batch.batch_id = mtp_batch.id )


-- Q3
SELECT mtp_batch.* FROM mtp_batch 
INNER JOIN mtp_student_batch ON mtp_batch.id = mtp_student_batch.batch_id 
where mtp_batch.exam_id = 30 
and mtp_student_batch.student_id = 7 
and mtp_batch.status = 1


-- NON WORKING ID

--Q1 
SELECT DISTINCT(A.id) as new_id, A.*, 
CASE WHEN EXISTS (SELECT * from mtp_mock_analytics B 
where B.mock_id = A.id and B.student_id= 8) THEN 1 ELSE 0 END as complete 
from mtp_resource_data A,mtp_mock_analytics 
where A.resource_type= 5 and A.exam_id= 10

--Q2 
SELECT A.*, CASE WHEN EXISTS (SELECT * from mtp_mock_analytics B 
where B.mock_id = A.id and B.student_id= 8) THEN 1 ELSE 0 END as complete 
from mtp_resource_data A where A.resource_type= 6 and A.exam_id= 10 
AND A.org_id In (SELECT org_id FROM mtp_batch , mtp_student_batch 
where org_id in () and exam_id=10 and student_id =8 and mtp_batch.status=1 
and mtp_student_batch.batch_id=mtp_batch.id )

--Q3 
SELECT mtp_batch.* FROM mtp_batch INNER JOIN mtp_student_batch 
ON mtp_batch.id = mtp_student_batch.batch_id 
where mtp_batch.exam_id = 10 
and mtp_student_batch.student_id = 8 and mtp_batch.status = 1




--Q2 
SELECT A.*, CASE WHEN EXISTS 
(SELECT * from mtp_mock_analytics B 
where B.mock_id = A.id and B.student_id= 8) 
THEN 1 ELSE 0 END as complete 
from mtp_resource_data A where A.resource_type= 6 and A.exam_id= 10 
AND A.org_id In (SELECT org_id FROM mtp_batch , mtp_student_batch 
where org_id in () and exam_id=10 and student_id =8 and mtp_batch.status=1 
and mtp_student_batch.batch_id=mtp_batch.id )

-- Q2
SELECT A.*, CASE WHEN EXISTS 
(SELECT * from mtp_mock_analytics B 
where B.mock_id = A.id and B.student_id= 7) 
THEN 1 ELSE 0 END as complete 
from mtp_resource_data A where A.resource_type= 6 and A.exam_id= 30 
AND A.org_id In (SELECT org_id FROM mtp_batch , mtp_student_batch 
where org_id in (2) and exam_id=30 and student_id =7 and mtp_batch.status=1 
and mtp_student_batch.batch_id=mtp_batch.id )
