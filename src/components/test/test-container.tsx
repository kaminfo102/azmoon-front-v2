import React, { useState } from 'react';
import { useTestState } from '@/hooks/use-test-state';
import { QuestionCard } from './question-card';
import { TestProgress } from './test-progress';
import { TestNavigation } from './test-navigation';
import { AnswerReview } from './results/answer-review';
import { ResultSummary } from './results/result-summary';
import { ResultChart } from './results/result-chart';


interface Question {
    id: string;
    text: string;
    options: Array<{ id: string; text: string }>;
    correctAnswer: string;
}

interface TestContainerProps {
    questions: Question[];
    duration: number;
    onComplete: () => void;
}

export function TestContainer({ questions, duration, onComplete }: TestContainerProps) {
    const {
        currentQuestion,
        answers,
        isComplete,
        handleAnswer: handleAnswerFromHook,
        handleNext,
        handlePrevious,
    } = useTestState(questions.length);

    const [isTestFinished, setIsTestFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(duration * 60); // زمان باقیمانده به ثانیه

    React.useEffect(() => {
        if (isComplete) {
            onComplete();
        }
    }, [isComplete, onComplete]);

    // وقتی زمان تمام شد این تابع اجرا می شود
    const handleTimeExpired = () => {
        setIsTestFinished(true);
    };

    if (!questions.length) {
        return <div>هیچ سوالی یافت نشد.</div>;
    }

    const currentQuestionData = questions[currentQuestion - 1];
    const selectedOption = answers.find((a) => a.questionId === currentQuestionData?.id)?.selectedOption;

    const handleAnswer = (optionId: string) => {
        handleAnswerFromHook(currentQuestionData.id, optionId, currentQuestion);
    };

    const calculateResults = () => {
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let skippedAnswers = 0;

        const results = questions.map((question, index) => {
            const userAnswer = answers.find((a) => a.questionId === question.id)?.selectedOption || '';
            const isCorrect = userAnswer === question.correctAnswer;

            if (userAnswer === '') {
                skippedAnswers++;
            } else if (isCorrect) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            }

            return {
                questionNumber: index + 1,
                questionText: question.text,
                userAnswer: userAnswer,
                correctAnswer: question.correctAnswer,
                isCorrect: isCorrect,
            };
        });

        const score = questions.length > 0 ? Math.round((correctAnswers / questions.length) * 100) : 0;

        return {
            results,
            correctAnswers,
            wrongAnswers,
            skippedAnswers,
            score,
        };
    };

    const handleFinishTest = () => {
        setIsTestFinished(true);
    };

    const { results, correctAnswers, wrongAnswers, skippedAnswers, score } = isTestFinished
        ? calculateResults()
        : { results: [], correctAnswers: 0, wrongAnswers: 0, skippedAnswers: 0, score: 0 };

    return (
        <>
            <TestProgress
                current={currentQuestion}
                total={questions.length}
                totalTime={duration * 60}
                onTimeExpired={handleTimeExpired}
            />

            <div className="container py-8">
                <div className="max-w-3xl mx-auto">
                    {!isTestFinished ? (
                        <QuestionCard
                            number={currentQuestion}
                            text={currentQuestionData.text}
                            options={currentQuestionData.options}
                            selectedOption={selectedOption}
                            onSelect={handleAnswer}
                        />
                    ) : (
                        <>
                            
                            <ResultSummary
                                totalQuestions={questions.length}
                                correctAnswers={correctAnswers}
                                wrongAnswers={wrongAnswers}
                                score={score}
                                timeTaken={duration * 60}
                                passingScore={50}
                            />
                            <ResultChart
                                correctAnswers={correctAnswers}
                                wrongAnswers={wrongAnswers}
                                skippedAnswers={skippedAnswers}
                            />
                          
                            <AnswerReview answers={results} />
                        </>


                    )}
                </div>
            </div>

            <TestNavigation
                onPrevious={handlePrevious}
                onNext={isTestFinished ? () => {} : handleNext}
                onFinish={handleFinishTest}
                hasPrevious={currentQuestion > 1}
                hasNext={currentQuestion < questions.length}
                isLastQuestion={currentQuestion === questions.length}
            />
        </>
    );
}
